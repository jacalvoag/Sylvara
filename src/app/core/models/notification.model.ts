export interface Notification {
    id: number;
    type: 'collaboration' | 'report' | 'alert';
    message: string;
    date: Date;
}