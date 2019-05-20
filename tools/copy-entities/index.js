const args = require('minimist')(process.argv.slice(2));

if (!args['from'] || !args['to']) {
    throw `"--from" and "--to" params are required`;
}

const path = require('path');
const fs = require('fs-extra');

const fromPath = path.join(__dirname, args['from']);
const toPath = path.join(__dirname, args['to']);
const recursive = args['recursive'];
const interfaces = args['interfaces'];



fs.ensureDirSync(toPath);
fs.emptyDirSync(toPath);

fs.stat(fromPath, (err, stats) => {
    if (err) throw err;
    if (!stats.isDirectory()) {
        throw `"--from" must be a directory`;
    } else {
        parseFilesInFolder(fromPath);
    }
})

function parseFilesInFolder(url) {
    fs.readdirSync(url).forEach(file => {
        const fileUrl = path.join(url, file);
        fs.stat(fileUrl, (err, stats) => {
            if (err) throw err
            if (stats.isDirectory() && recursive) {
                parseFilesInFolder(fileUrl);
            } else {
                if (!fileUrl.includes('.spec.ts')) {
                    if (interfaces) {
                        if (fileUrl.includes('.interface.ts')) {
                            copyFile(fileUrl, path.join(toPath, file));
                        }
                    } else {
                        if (fileUrl.includes('.entity.ts') || fromPath.includes('enums')) {
                            copyFile(fileUrl, path.join(toPath, file));
                        }
                    }
                }
            }
        })
    })
};

function copyFile(fromPath, toPath) {
    fs.copySync(fromPath, toPath);
    if (!interfaces) {
        let file = fs.readFileSync(toPath, 'utf-8').toString()
            .replace(/\r/g, '')
            .replace(/,\n/g, ',')
            .replace(/\{\n/g, '{')
            .replace(/( )*\{( )*(\n)*/g, '{')
            .replace(/( )*\}( )*(\n)*/g, '}')
            .replace(/({ *)\@/g, '{\n@')
            .replace(/\n\n(?!( ))+/g, '\n$1')
            .split('\n');
        for (let line = 0; line < file.length; line++) {
            if (
                (file[line].includes('@') || (file[line].includes('import'))) &&
                ((!file[line].includes('@entities') && !file[line].includes('@entities')) && !file[line].includes('export'))
            ) {
                file.splice(line, 1);
                line--;
            }
        }
        file = file.join('\n')
            .replace(/(.)\{(.)/g, '$1 { $2')
            .replace(/(.)\}(.)/g, '$1 } $2')
            .replace(/(\w*\: *('|").*?('|")(?!;))/g, '\n    $1')
            .replace(/(\w){1}\{/g, '$1 {')
            .replace(/}(?![\)\n( )])/g, '}\n')
            .replace(/(;)\n*(import)/g, '$1\n\n$2')
            .replace(/(;)\n*(import)/g, '$1\n$2')
            .replace(/(;)\n*(export)/g, '$1\n\n$2')
            .replace(/(;)\n*(const)/g, '$1\n\n$2')
            .replace(/, }/g, ',\n}')
            .replace(/{ \n/g, '{\n')
            .replace(/(\/)(.+)(\1)(\2)/g, '$1$2')
            .replace(/}( )*;/g, '};')
            .replace(/@styx-nest/g, '@styx-angular')

        fs.writeFileSync(toPath, file, 'utf-8');
    } else {
        let file = fs.readFileSync(toPath, 'utf-8').toString()
            .replace(/@styx-nest/g, '@styx-angular');
        fs.writeFileSync(toPath, file, 'utf-8');
    }
}