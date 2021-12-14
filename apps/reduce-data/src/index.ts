import { BlitterDatum, FrostbookDatum, generateBlitter, generateFrostbook } from './RawData';

export function printExampleData() {
    const from = new Date('2021-11-01');
    const to = new Date('2021-11-30');

    const blitterData = generateBlitter(from, to);
    const frostbookData = generateFrostbook(from, to);

    console.log('Blitter data:');
    console.log(JSON.stringify(blitterData, null, 2));
    console.log('Frostbook data:');
    console.log(JSON.stringify(frostbookData, null, 2));
}

/**
 * Report entry summarizing a social media platform's performance
 * over a given month.
 */
type MonthlyGrowth = {
    monthEnding : Date;
    changeInViews : number;
    changeInLikes : number;
    changeInFollowers : number;
};

/**
 * Input data for a chart that will graph monthly changes on
 * the Frostbook and Blitter platforms.
 */
type MonthlyChangeReport = {
  frostbook : MonthlyChangeReport;
  blitter : MonthlyChangeReport;
};

/**
 * Generate data for the monthly change report.
 *
 * @return array of 12 MonthlyChangeReport objects detailing results for the last year.
 */
export function runMonthlyChangeReport() : MonthlyChangeReport | null {
    return null;
}


printExampleData();

// const output = runMonthlyChangeReport();
// console.log(JSON.stringify(output, null, 2);


