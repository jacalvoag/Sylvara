import { Zones } from "./zones.model";

export interface Project {
    id: number;
    name: string;
    zones: number;
    status: 'Activo' | 'Terminado';
    description: string;
    zone: Zones[]
}