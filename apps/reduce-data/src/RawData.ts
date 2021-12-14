export type BlitterDatum = {
    /** Date of the reading */
    date: string;
    /** Post views recorded on that date */
    views: number;
    /** Like button clicks on that date */
    likes: number;
    /** Followers subscribed on that date */
    followers: number;
    /** Followers unsubscribed on that date */
    unfollowers: number;
}

export type FrostbookDatum = {
    /** Date of the reading */
    date: string;
    /** Visits to the page on that date. Omitted if zero. */
    visits?: number;
    /** Total followers of the page as of that date */
    followers: number;
    /** Number of times the page has been liked since it was created. */
    likes: number;
}

function approx(base: number, plusOrMinus: number) : number {
    return Math.round(base + (2 * Math.random() - 1) * plusOrMinus);
}

export function generateBlitter(start: Date, end: Date) : BlitterDatum[] {
    let result : BlitterDatum[] = [];
    let today = new Date(start);
    while (today < end) {
        const entry = {
            date: today.toString(),
            views: approx( 20, 10),
            likes: approx(5, 5),
            followers: approx(4, 2),
            unfollowers: approx(2, 1),
        };
        // there's a 2% chance that the data point for a given day is missing
        if (Math.random() < 0.98) {
            result.push(entry);
        }
        // advance to the next day
        today.setDate(today.getDate() + 1);
    }
    return result;
}

export function generateFrostbook(start: Date, end: Date) : FrostbookDatum[] {
    let result : FrostbookDatum[] = [];
    let today = new Date(start);
    let followers = approx(1000, 100);
    let likes = approx(2000, 250);
    while (today < end) {
        const entry = {
            date: today.toString(),
            visits: Math.random() < 0.05 ? undefined : approx(5, 4),
            likes: likes,
            followers: followers,
        };
        // there's a 2% chance that the data point for a given day is missing
        if (Math.random() < 0.98) {
            result.push(entry);
            console.log('*');
        }
        // update running totals and advance to the next day
        followers += approx(10, 8);
        likes += approx(5, 4);
        today.setDate(today.getDate() + 1);
    }
    return result;
}