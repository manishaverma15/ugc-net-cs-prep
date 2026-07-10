import type { UnitData } from "@/types/unit";
import discreteStructures from "@/data/units/discrete-structures-and-optimization.json";
import computerArchitecture from "@/data/units/computer-system-architecture.json";
import programmingLanguages from "@/data/units/programming-languages.json";
import dataStructures from "@/data/units/data-structures-and-algorithms.json";
import theoryOfComputation from "@/data/units/theory-of-computation.json";
import compilerDesign from "@/data/units/compiler-design.json";
import operatingSystem from "@/data/units/operating-system.json";
import databaseManagement from "@/data/units/database-management-system.json";
import computerNetworks from "@/data/units/computer-networks.json";
import softwareEngineering from "@/data/units/software-engineering.json";

export const units: UnitData[] = [
  discreteStructures as UnitData,
  computerArchitecture as UnitData,
  programmingLanguages as UnitData,
  dataStructures as UnitData,
  theoryOfComputation as UnitData,
  compilerDesign as UnitData,
  operatingSystem as UnitData,
  databaseManagement as UnitData,
  computerNetworks as UnitData,
  softwareEngineering as UnitData,
];

export function getUnitBySlug(slug: string): UnitData | undefined {
  return units.find((unit) => unit.slug === slug);
}
