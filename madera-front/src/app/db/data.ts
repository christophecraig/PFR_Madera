// import { Range } from '../models/Range';
// import { Insulation } from '../models/Insulation';
// import { Cover } from '../models/Cover';
// import { WoodFrame } from '../models/WoodFrame';
// import { Frame } from '../models/Frame';
// import { Component } from '../models/Component';
// import { Nature } from '../models/Nature';
// import { ComponentType } from '../models/ComponentType';
// import { Customer } from '../models/Customer';
// import { Module } from '../models/Module';
// import { Cut } from '../models/Cut';
// import { Specification } from '../models/Specification';
// import { Unit } from '../models/Unit';
// import { Quote } from '../models/Quote';
// import { Model } from '../models/Model';
// import { TechnicalClause } from '../models/TechnicalClause';

// const insulations: Insulation[] = [
//     {
//         id: 1,
//         name: 'Synthétique'
//     },
//     {
//         id: 2,
//         name: 'Naturel'
//     },
//     {
//         id: 3,
//         name: 'Biologique'
//     },
//     {
//         id: 4,
//         name: 'Bois'
//     }
// ];

// const covers: Cover[] = [
//     {
//         id: 1,
//         name: 'Tuiles'
//     },
//     {
//         id: 2,
//         name: 'Ardoises'
//     },
//     {
//         id: 3,
//         name: 'Briques'
//     },
//     {
//         id: 4,
//         name: 'Fibre'
//     }
// ];

// const woodFrames: WoodFrame[] = [
//     {
//         id: 1,
//         name: 'Ossature bois simple'
//     },
//     {
//         id: 2,
//         name: 'Ossature bois dur'
//     },
//     {
//         id: 3,
//         name: 'Ossature bois chêne'
//     },
//     {
//         id: 4,
//         name: 'Ossature bois frêne'
//     }
// ];

// const frames: Frame[] = [
//     {
//         id: 1,
//         name: 'Bois'
//     },
//     {
//         id: 2,
//         name: 'Métal'
//     },
//     {
//         id: 3,
//         name: 'Acier'
//     },
//     {
//         id: 4,
//         name: 'Fibre'
//     }
// ];

// const natures: Nature[] = [
//     {
//         id: 1,
//         name: 'Murs extérieurs'
//     },
//     {
//         id: 2,
//         name: 'Cloisons intérieures'
//     },
//     {
//         id: 3,
//         name: 'Plancher sur dalle'
//     },
//     {
//         id: 4,
//         name: 'Plancher porteur'
//     },
//     {
//         id: 5,
//         name: 'Fermes de charpente'
//     },
//     {
//         id: 6,
//         name: 'Couverture (toit)'
//     }
// ];

// const componentTypes: ComponentType[] = [
//     {
//         id: 1,
//         name: 'Famille de composants souple'
//     },
//     {
//         id: 2,
//         name: 'Famille de composants bois'
//     },
//     {
//         id: 3,
//         name: 'Famille de composants métal'
//     },
//     {
//         id: 4,
//         name: 'Famille de composants acier'
//     }
// ];

// const technicalClauses: TechnicalClause[] = [
//     {
//         id: 1,
//         name: 'Caractéristiques de la dalle béton'
//     },
//     {
//         id: 2,
//         name: 'Plots béton recevant une lisse basse horizontale'
//     },
//     {
//         id: 3,
//         name: 'Caractéristiques de la dalle pierre'
//     },
//     {
//         id: 4,
//         name: 'Caractéristiques de la dalle béton armé'
//     }
// ];

// const specifications: Specification[] = [
//     {
//         id: 1,
//         name: 'Specification 1',
//         value: 'Spec 1'
//     },
//     {
//         id: 2,
//         name: 'Specification 2',
//         value: 'Spec 2'
//     },
//     {
//         id: 3,
//         name: 'Specification 3',
//         value: 'Spec 3'
//     },
//     {
//         id: 4,
//         name: 'Specification 4',
//         value: 'Spec 4'
//     }
// ];

// const units: Unit[] = [
//     {
//         id: 1,
//         name: 'cm'
//     },
//     {
//         id: 2,
//         name: 'm'
//     },
//     {
//         id: 3,
//         name: 'm²'
//     },
//     {
//         id: 4,
//         name: 'pièce'
//     }
// ];

// const components: Component[] = [
//     {
//         id: 1,
//         name: 'Lisses ou contrefort',
//         nature: natures[0],
//         componentType: componentTypes[0],
//         technicalClause: technicalClauses[0],
//         // units: [
//         //     units[0]
//         // ],
//         // specifications: [
//         //     specifications[0]
//         // ]
//     },
//     {
//         id: 2,
//         name: 'Montants en bois',
//         nature: natures[1],
//         componentType: componentTypes[0]
//     },
//     {
//         id: 3,
//         name: 'Sabots métalliques,',
//         nature: natures[0],
//         componentType: componentTypes[1],
//         // units: [
//         //     units[1]
//         // ],
//         // specifications: [
//         //     specifications[0]
//         // ]
//     },
//     {
//         id: 4,
//         name: 'Boulons',
//         nature: natures[2],
//         componentType: componentTypes[1],
//         technicalClause: technicalClauses[2]
//     },
//     {
//         id: 5,
//         name: 'Gougeons',
//         nature: natures[0],
//         componentType: componentTypes[2],
//         technicalClause: technicalClauses[3]
//     },
//     {
//         id: 6,
//         name: 'Panneaux d’isolation',
//         nature: natures[0],
//         componentType: componentTypes[3],
//         technicalClause: technicalClauses[3],
//         // units: [
//         //     units[2],
//         //     units[3]
//         // ],
//         // specifications: [
//         //     specifications[2],
//         //     specifications[0]
//         // ]
//     },
//     {
//         id: 7,
//         name: 'Pare-pluie',
//         nature: natures[2],
//         componentType: componentTypes[3],
//         technicalClause: technicalClauses[1]
//     },
//     {
//         id: 8,
//         name: 'Planchers',
//         nature: natures[2],
//         componentType: componentTypes[1]
//     },
//     {
//         id: 9,
//         name: 'Panneaux intermédiaires',
//         nature: natures[3],
//         componentType: componentTypes[1]
//     },
//     {
//         id: 10,
//         name: 'Panneaux de couverture',
//         nature: natures[1],
//         componentType: componentTypes[2]
//     }
// ];

// const cuts: Cut[] = [
//     {
//         id: 1,
//         name: 'Coupe en travers'
//     },
//     {
//         id: 2,
//         name: 'Coupe intermédiaire'
//     },
//     {
//         id: 3,
//         name: 'Coupe complète'
//     },
//     {
//         id: 4,
//         name: 'Demi-coupe'
//     }
// ];

// const modules: Module[] = [
//     {
//         id: 1,
//         name: 'Mur extérieur',
//         cuts: [
//             cuts[2]
//         ],
//         nature: natures[0],
//         components: [
//             components[4],
//             components[3],
//             components[1]
//         ],
//         // specifications: [
//         //     specifications[0]
//         // ],
//         // units: [
//         //     units[0]
//         // ]
//     },
//     {
//         id: 2,
//         name: 'Mur intérieur',
//         cuts: [
//             cuts[0],
//             cuts[1]
//         ],
//         nature: natures[1],
//         components: [
//             components[0],
//             components[4]
//         ],
//         // specifications: [
//         //     specifications[1],
//         //     specifications[3]
//         // ],
//         // units: [
//         //     units[3],
//         //     units[1]
//         // ]
//     }
// ];

// const models: Model[] = [
//     {
//         id: 1,
//         name: 'Modele 1',
//         modules: [
//             modules[0]
//         ]
//     }
// ];

// const ranges: Range[] = [
//     {
//         id: 1,
//         name: 'Gamme bois',
//         insulation: insulations[0],
//         cover: covers[0],
//         woodFrame: woodFrames[0],
//         frame: frames[0],
//         models: [
//             models[0]
//         ]
//     },
//     {
//         id: 2,
//         name: 'Gamme vert',
//         insulation: insulations[1],
//         cover: covers[1],
//         woodFrame: woodFrames[1],
//         frame: frames[1]
//     },
//     {
//         id: 3,
//         name: 'Gamme total',
//         insulation: insulations[2],
//         cover: covers[2],
//         woodFrame: woodFrames[2],
//         frame: frames[2]
//     },
//     {
//         id: 4,
//         name: 'Gamme blue',
//         insulation: insulations[3],
//         cover: covers[3],
//         woodFrame: woodFrames[3],
//         frame: frames[3]
//     },

// ];

// const customers: Customer[] = [
//     {
//         id: 1,
//         reference: 'DUP1',
//         firstName: 'Sylvain',
//         lastName: 'Dupont',
//         address: '44 Avenue Frédéric Auguste Bartholdi, 72000 Le Mans'
//     },
//     {
//         id: 2,
//         reference: 'HOL2',
//         firstName: 'Samuel',
//         lastName: 'Hollande',
//         address: '44 Avenue Jean Jaurès, 72000 Le Mans'
//     },
//     {
//         id: 3,
//         reference: 'LAS3',
//         firstName: 'Jean',
//         lastName: 'Dupont',
//         address: '55 Rue du Faubourg Saint-Honoré, 75008 Paris'
//     },
//     {
//         id: 4,
//         reference: 'HUL4',
//         firstName: 'Nicolas',
//         lastName: 'Bertrand',
//         address: '97 Place des Halles, 72500 Château-Du-Loir'
//     },
//     {
//         id: 5,
//         reference: 'LREM',
//         firstName: 'Manuel',
//         lastName: 'Christophe',
//         address: '55 Rue du Faubourg Saint-Honoré, 75008 Paris'
//     }
// ];

// const quotes: Quote[] = [
//     {
//         id: 1,
//         name: 'Devis 1',
//         reference: 'GHE15465',
//         customer: customers[0],
//         date: new Date('10/27/2018'),
//         range: ranges[2],
//         modules: [
//             modules[0]
//         ]
//     },
//     {
//         id: 2,
//         name: 'Devis 2',
//         reference: 'GHE15466',
//         customer: customers[1],
//         date: new Date('10/29/2018'),
//         range: ranges[1],
//         modules: [
//             modules[1]
//         ]
//     }
// ];

// export default {
//     insulations: insulations,
//     covers: covers,
//     woodFrames: woodFrames,
//     frames: frames,
//     ranges: ranges,
//     natures: natures,
//     componentTypes: componentTypes,
//     customers: customers,
//     technicalClauses: technicalClauses,
//     specifications: specifications,
//     units: units,
//     components: components,
//     cuts: cuts,
//     modules: modules,
//     quotes: quotes,
//     models: models
// };
