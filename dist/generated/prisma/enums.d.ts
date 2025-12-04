export declare const UserStatusEnum: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly DRAFT: "DRAFT";
    readonly BLOCKED: "BLOCKED";
};
export type UserStatusEnum = (typeof UserStatusEnum)[keyof typeof UserStatusEnum];
export declare const AuthProviderEnum: {
    readonly LOCAL: "LOCAL";
    readonly GOOGLE: "GOOGLE";
    readonly FACEBOOK: "FACEBOOK";
    readonly OTHER: "OTHER";
};
export type AuthProviderEnum = (typeof AuthProviderEnum)[keyof typeof AuthProviderEnum];
export declare const EventStatusEnum: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly CANCELED: "CANCELED";
};
export type EventStatusEnum = (typeof EventStatusEnum)[keyof typeof EventStatusEnum];
