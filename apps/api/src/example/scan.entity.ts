// import { Analysis, Scan, ScanStatus, ScanType } from "@app/interfaces";
//
// export class ScanEntity implements Scan {
//     id: string;
//     userId: string;
//
//     type: ScanType;
//     status: ScanStatus;
//
//     name: string;
//     ingredients: string[];
//     analysis: Analysis | null;
//
//     createdAt?: Date | string;
//     updatedAt?: Date | string;
//
//     constructor(scan: Partial<Scan>) {
//         if (scan.id) this.id = scan.id;
//
//         this.name = scan.name || '';
//
//         this.createdAt = scan.createdAt || undefined
//         this.updatedAt = scan.updatedAt || undefined;
//     }
//
//     public setName(name?: string) {
//         if (!name) return this;
//         this.name = name;
//         return this;
//     }
// }
