# Alex Nye
work@alexnye.com

## General skills and inclinations
 - I like fixing bugs and cleaning up database issues.
 - I have also worked on React, TypeScript, and GraphQL.

### TrueCar — November 2020 - Present
 - I've worked on vehicle information and vehicle configuration pages.
 - Debugged an in-house partial GraphQL query deferral implementation.  This came down to the main body of the query coming in without errors and the deferred portion coming in with errors.  The implementation was written such that the type system allowed accessing null data in the deferred portion of the query without flagging the error.
 - Cleaned up duplicate records in a table with 14 million records.  Added missing constraints to prevent the same issue in the future.  This task required good knowledge of SQL, creative approaches to validating large data transformations, diligence, and careful experimentation on production replicas to ensure the query could be broken up into batches that would not crash Production.

### Herrmann International — June 2018 - November 2020
 - Took part in the design, evolution, and implementation of several projects new and old as part of a small team of 4.

### Nye Software, LLC — February 2018 - June 2018
 - I incorporated an LLC in North Carolina and took on a contract to work on Findum.com.

### All American Entertainment — November 2016 - February 2018
 - I took over 2 software projects whose developers had abandoned.  I started as the sole developer with an experienced devops contractor as my mentor.
 - Increased the test suite from 4 to 400 tests (not assertions, tests).
 - Defined requirements and stories with the company owner.
 - Transformed records of sales lead state transitions into an analysis table. Filled in gaps where logs could not form a complete history of state transitions (if we have a log of a->b, and y->z, we must be missing at least one link in the chain, b->y). Created query builders for looking at data over a user-provided range of time, instantaneous data at a point in time, and gathering descriptive statistics.
 - Handed off the project to an outsourced contractor team.
