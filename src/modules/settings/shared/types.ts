export interface KeyBindSettings {
    answer: string;
    dontKnowAnswer: string;
    pause: string;
}

export interface UserSettings {
    lang: string;
    volume: number;
    isEnableSound: boolean;
    keyBind: KeyBindSettings;
}

export interface SettingsApiResponse {
    success: boolean;
    error?: string;
    settings?: UserSettings;
}

export interface SettingsProps {
    userSettings?: UserSettings;
    isSingleGame?: boolean;
}

export type UserRole = "Lead" | "Player" | "Viewer";