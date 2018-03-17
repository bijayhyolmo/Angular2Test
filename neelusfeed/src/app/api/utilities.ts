export namespace Utilities {
    export class Type {
        public static isString(value: string): boolean {
            switch (value) {
                case '': return false;
                case undefined: return false;
                case null: return false;
                default: return true;
            }
        }
    }
}
