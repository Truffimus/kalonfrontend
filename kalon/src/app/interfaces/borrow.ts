export interface Borrow {
    id:           number;
    isBorrowed:   boolean;
    borrower:     string;
    operator:     string;
    dateIssued:   Date;
    dateReturned: null;
    memberId:     number;
    bookId:       number;
}