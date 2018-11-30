import { Nature } from "./Nature";
import { TechnicalClause } from "./TechnicalClause";
import { Specification } from "./Specification";
import { Unit } from "./Unit";
import { ComponentType } from "./ComponentType";

export class Component {
    id: number
    name: string
    nature: Nature
    technicalClause?: TechnicalClause
    specifications?: Specification[]
    units?: Unit[]
    componentType: ComponentType
}