# SpaceWars-2050
CSC 220 Final Project 

###Overview: current process is manual

##Goal 1:
detect which courses a student has taken that count toward the major
##Goal 2:
give adviser an overview of all advisees

###• Ideal: we would like to build a plugin that sits on top of
Banner and does everything for us, but that won’t work
because of FERPA concerns (can’t alter Banner)


### • Actual strategy:
- Define mapping from course numbers to major/minor designation
(core, T|S|P, seminar, etc.)
- Export CSV of all advisees from Banner, load into secure db
- Build a parser that extracts data from unofficial transcript (i.e.
courses taken) and joins with mapping, majors/minors
- Build authenticated HTML/JS frontend for adviser to track
student progress across all their advisees, as well as send
messages / schedule appointments

###• Key components:
- Secure database (local vs. through CATS)
- Web server (localhost is probably fine?)
- Authentication method (not sure about this yet)
- PDF parser (PDFminer python library?)
- Some way to build the frontend (Node?)

###• Timeline:
- Week of 4/3: figure out db, auth (DT), frontend framework (RJC)
- Week of 4/10: db architecture (DT), PDF parser (RJC)
- Week of 4/17: map courses à requirements (DT), frontend (RJC)
- Week of 4/24: demo (DT/RJC)
- Week of 5/2: finalize system, write up docs (DT/RJC)

###• Potential issue 1:
- Data from PDF versions of unofficial transcripts might be really
hard to extract (printouts aren’t consistent format)
- Backup plan: manual extraction of ~10 students for demo, if time
permits implement a data entry interface

###• Potential issue 2:
- Most 200-level CS courses satisfy more than one requirement, how
do we know which one is optimal?
- Plan to address this: inefficient, but it would be possible to generate
all possible mappings and select the one that puts the student
“closest to done”
