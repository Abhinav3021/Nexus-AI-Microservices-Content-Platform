import type { Request, Response, NextFunction } from "express";
interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    image: string;
    instagram: string;
    github: string;
    linkedin: string;
    bio: string;
}
export interface AuthenticatedRequest extends Request {
    user?: IUser | null;
}
export declare const isAuth: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=isAuth.d.ts.map