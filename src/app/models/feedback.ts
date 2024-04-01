export class FeedbacksList {
    content: Array<Feedback>;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number
}
export class Feedback {
    id: string;
    rating: number;
    description: string;
    dateHourIncluded: Date;
    public: boolean
}