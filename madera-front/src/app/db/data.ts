import { Range } from "../models/Range";
import { Insulation } from "../models/Insulation";
import { Cover } from "../models/Cover";
import { WoodFrame } from "../models/WoodFrame";
import { Frame } from "../models/Frame";
import { Component } from "../models/Component";
import { Nature } from "../models/Nature";
import { ComponentType } from "../models/ComponentType";
import { Customer } from "../models/Customer";
import { Module } from "../models/Module";
import { Cut } from "../models/Cut";
import { Specification } from "../models/Specification";
import { Unit } from "../models/Unit";
import { Quote } from "../models/Quote";
import { Model } from "../models/Model";
import { TechnicalClause } from "../models/TechnicalClause";

const insulations: Insulation[] = [
    {
        id: 1,
        name: "Insulation 1"
    },
    {
        id: 2,
        name: "Insulation 2"
    },
    {
        id: 3,
        name: "Insulation 3"
    },
    {
        id: 4,
        name: "Insulation 4"
    }
]

const covers: Cover[] = [
    {
        id: 1,
        name: "Cover 1"
    },
    {
        id: 2,
        name: "Cover 2"
    },
    {
        id: 3,
        name: "Cover 3"
    },
    {
        id: 4,
        name: "Cover 4"
    }
]

const woodFrames: WoodFrame[] = [
    {
        id: 1,
        name: "Wood Frame 1"
    },
    {
        id: 2,
        name: "Wood Frame 2"
    },
    {
        id: 3,
        name: "Wood Frame 3"
    },
    {
        id: 4,
        name: "Wood Frame 4"
    }
]

const frames: Frame[] = [
    {
        id: 1,
        name: "Frame 1"
    },
    {
        id: 2,
        name: "Frame 2"
    },
    {
        id: 3,
        name: "Frame 3"
    },
    {
        id: 4,
        name: "Frame 4"
    }
]

const natures: Nature[] = [
    {
        id: 1,
        name: "Nature 1"
    },
    {
        id: 2,
        name: "Nature 2"
    },
    {
        id: 3,
        name: "Nature 3"
    },
    {
        id: 4,
        name: "Nature 4"
    }
]

const componentTypes: ComponentType[] = [
    {
        id: 1,
        name: "Component type 1"
    },
    {
        id: 2,
        name: "Component type 2"
    },
    {
        id: 3,
        name: "Component type 3"
    },
    {
        id: 4,
        name: "Component type 4"
    }
]

const technicalClauses: TechnicalClause[] = [
    {
        id: 1,
        name: "Technical Clause 1"
    },
    {
        id: 2,
        name: "Technical Clause 2"
    },
    {
        id: 3,
        name: "Technical Clause 3"
    },
    {
        id: 4,
        name: "Technical Clause 4"
    }
]

const specifications: Specification[] = [
    {
        id: 1,
        name: "Specification 1",
        value: "Spec 1"
    },
    {
        id: 2,
        name: "Specification 2",
        value: "Spec 2"
    },
    {
        id: 3,
        name: "Specification 3",
        value: "Spec 3"
    },
    {
        id: 4,
        name: "Specification 4",
        value: "Spec 4"
    }
]

const units: Unit[] = [
    {
        id: 1,
        name: "Unit 1"
    },
    {
        id: 2,
        name: "Unit 2"
    },
    {
        id: 3,
        name: "Unit 3"
    },
    {
        id: 4,
        name: "Unit 4"
    }
]

const components: Component[] = [
    {
        id: 1,
        name: "Component 1",
        nature: natures[0],
        componentType: componentTypes[0],
        technicalClause: technicalClauses[0],
        units: [
            units[0]
        ],
        specifications: [
            specifications[0]
        ]
    },
    {
        id: 2,
        name: "Component 2",
        nature: natures[1],
        componentType: componentTypes[0]
    },
    {
        id: 3,
        name: "Component 3",
        nature: natures[0],
        componentType: componentTypes[1],
        units: [
            units[1]
        ],
        specifications: [
            specifications[0]
        ]
    },
    {
        id: 4,
        name: "Component 4",
        nature: natures[2],
        componentType: componentTypes[1],
        technicalClause: technicalClauses[2]
    },
    {
        id: 5,
        name: "Component 5",
        nature: natures[0],
        componentType: componentTypes[2],
        technicalClause: technicalClauses[3]
    },
    {
        id: 6,
        name: "Component 6",
        nature: natures[0],
        componentType: componentTypes[3],
        technicalClause: technicalClauses[3],
        units: [
            units[2],
            units[3]
        ],
        specifications: [
            specifications[2],
            specifications[0]
        ]
    },
    {
        id: 7,
        name: "Component 7",
        nature: natures[2],
        componentType: componentTypes[3],
        technicalClause: technicalClauses[1]
    },
    {
        id: 8,
        name: "Component 8",
        nature: natures[2],
        componentType: componentTypes[1]
    },
    {
        id: 9,
        name: "Component 9",
        nature: natures[3],
        componentType: componentTypes[1]
    },
    {
        id: 10,
        name: "Component 10",
        nature: natures[1],
        componentType: componentTypes[2]
    }
]

const cuts: Cut[] = [
    {
        id: 1,
        name: 'Cut 1'
    },
    {
        id: 2,
        name: 'Cut 2'
    },
    {
        id: 3,
        name: 'Cut 3'
    },
    {
        id: 4,
        name: 'Cut 4'
    }
]

const modules: Module[] = [
    {
        id: 1,
        name: "Module 1",
        cuts: [
            cuts[2]
        ],
        nature: natures[0],
        components: [
            components[4],
            components[3],
            components[1]
        ],
        specifications: [
            specifications[0]
        ],
        units: [
            units[0]
        ]
    },
    {
        id: 2,
        name: "Module 2",
        cuts: [
            cuts[0],
            cuts[1]
        ],
        nature: natures[1],
        components: [
            components[0],
            components[4]
        ],
        specifications: [
            specifications[1],
            specifications[3]
        ],
        units: [
            units[3],
            units[1]
        ]
    }
]

const models: Model[] = [
    {
        id: 1,
        name: "Model 1",
        modules: [
            modules[0]
        ]
    }
]

const ranges: Range[] = [
    {
        id: 1,
        name: "Range 1",
        insulation: insulations[0],
        cover: covers[0],
        woodFrame: woodFrames[0],
        frame: frames[0],
        models: [
            models[0]
        ]
    },
    {
        id: 2,
        name: "Range 2",
        insulation: insulations[1],
        cover: covers[1],
        woodFrame: woodFrames[1],
        frame: frames[1]
    },
    {
        id: 3,
        name: "Range 3",
        insulation: insulations[2],
        cover: covers[2],
        woodFrame: woodFrames[2],
        frame: frames[2]
    },
    {
        id: 4,
        name: "Range 4",
        insulation: insulations[3],
        cover: covers[3],
        woodFrame: woodFrames[3],
        frame: frames[3]
    },

]

const customers: Customer[] = [
    {
        id: 1,
        reference: "DUP1",
        firstName: "Sylvain",
        lastName: "Dupont",
        address: "44 Avenue Frédéric Auguste Bartholdi, 72000 Le Mans"
    },
    {
        id: 2,
        reference: "HOL2",
        firstName: "Samuel",
        lastName: "Hollande",
        address: "44 Avenue Jean Jaurès, 72000 Le Mans"
    },
    {
        id: 3,
        reference: "LAS3",
        firstName: "Jean",
        lastName: "Lasalle",
        address: "55 Rue du Faubourg Saint-Honoré, 75008 Paris"
    },
    {
        id: 4,
        reference: "HUL4",
        firstName: "Nicolas",
        lastName: "Hulot",
        address: "97 Place des Halles, 72500 Château-Du-Loir"
    },
    {
        id: 5,
        reference: "LREM",
        firstName: "Manu",
        lastName: "Macron",
        address: "55 Rue du Faubourg Saint-Honoré, 75008 Paris"
    }
]

const quotes: Quote[] = [
    {
        id: 1,
        name: "Devis 1",
        reference: "GHE15465",
        customer: customers[0],
        date: new Date("10/27/2018"),
        range: ranges[2],
        modules: [
            modules[0]
        ]
    },
    {
        id: 2,
        name: "Devis 2",
        reference: "GHE15466",
        customer: customers[1],
        date: new Date("10/29/2018"),
        range: ranges[1],
        modules: [
            modules[1]
        ]
    }
]

export default {
    insulations: insulations,
    covers: covers,
    woodFrames: woodFrames,
    frames: frames,
    ranges: ranges,
    natures: natures,
    componentTypes: componentTypes,
    customers: customers,
    technicalClauses: technicalClauses,
    specifications: specifications,
    units: units,
    components: components,
    cuts: cuts,
    modules: modules,
    quotes: quotes,
    models: models
}