# reduce-data

This interview challenge assesses data processing abilities.

`src/RawData.ts` defines a simplified data schema for two hypothetical 
social networks and provides methods `generateBlitter()` and 
`generateFrostbook()` to obtain example data from those platforms.

Some items are important to note:
* The data format for each platform is similar but not identical. In
  particular, data is sometimes reported as a change from the prior
  day, and sometimes as a running total.
* Followers are reported differently across the platforms.
* Some fields are marked as optional, to reduce bandwidth and storage
  requirements. When a field is missing, it's value is zero.
* There is a small (2%) probability that data may be missing for a
  given day, due to data and API errors.

Given the information above, your task is to implement the
`runMonthlyChangeReport()` method in`index.ts`. 

This method will retrieve a year of daily data (365 records) from
the data generator methods, then distill it to produce a set of
monthly summaries (12 records) encoded as a `MonthlyChangeReport`
data structure that can be passed on to a charting 
component for rendering (chart creation is not included in this 
exercise).

