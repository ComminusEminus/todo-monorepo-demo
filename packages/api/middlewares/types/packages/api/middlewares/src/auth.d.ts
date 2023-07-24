import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTstrategy } from 'passport-jwt';
export declare const loginStrategy: LocalStrategy;
export declare const verificationStrategy: JWTstrategy;
