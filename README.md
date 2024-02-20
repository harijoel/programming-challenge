# General

Deadline: Monday, February 19, 2024

Estimated time to complete: 1-2 Hours (for your own sake, please don't exceed two hours.)

# Getting Started

First, you should fork this repository. After completing the missions, please submit your work to me by emailing me a link to your repository (github or gitlab, either is fine). Please contact me directly if you have trouble getting started on this project. This is a new concept for Parsec. tim@parseceducation.com

### Prerequisites

You need to have the following installed:

- NodeJS ([Download](https://nodejs.org/en/download))
- Docker and Docker Compose ([Guide](https://docs.docker.com/compose/install/))

### Starting the project

In order to limit the number of dependencies in this project, our implementation requires you to run three processes in parallel.

**Turning on the database:**
1. From the root of this project, run:
```
docker compose up
```
2. Navigate to the `./api` directory and run `npm run migrate:latest`. This will create a `tasks` table.
3. From the `./api` directory, run `npm run seed:run`. This will create three tasks in your table.

**Running the API**
1. Navigate to the `./api` directory.
2. Run `npm install`
3. Run `npm run dev`

**Running the Vue app**
1. Navigate to the `./client` directory.
2. Run `npm install`
3. Run `npm run dev`

If you find an error in this documentation, please promptly reach out to me at tim@parseceducation.com


# Your Mission

Your mission, should you choose to accept it, comes in two parts. They are both documented below. Before I dive into the details, you should know a few things:

1. Don't spend more than two hours on this. We hope that you can accomplish both of these tasks within an hour or so.
2. If you think that this is way more work than one hour, please let me know. This is Parsec's first time with this type of challenge. Your feedback would be greatly appreciated.
3. You can and _should_ use every tool at your disposable--i.e. google things, use ChatGPT, StackOverflow, whatever you want. Go crazy.
4. Colors and font sizes are all in `./client/src/assets/base.scss`. Use `--color-accent-one` for blue, and `--color-text` for grey/black.

Specific judgement criteria are specified below. In addition to this, your overall implementatio decisions will be judged out of ten points:

**Decision making - 5 points**
- Are your intentions clear?
- Are concerns clearly separated?

**Work quality - 5 points**
- Are your commits small and clean? (Ironically, my git history is embarassingly unclean. Use `git log` to see how not to write small, clean commits.)
- Will the work you leave behind still be understandable if nobody touches/looks at it for six months?

### Mission One: Add a task input

Complete this mission in:
- `./client/src/components/TaskInput.vue` (see `./client/src/components/Challenge.vue` for details, too)

Design:

![Gif that should load.](https://gitlab.com/tim386/programming-challenge/-/raw/main/random/mission-one.gif?ref_type=heads&inline=false)

**Definition of done:**
- [ ] User can type into the input
- [ ] A button with the text "Add" is visible
- [ ] User can click the button to submit the input

Your submission will be judged out of ten points based on the following criteria:

**Design fidelity - 5 points total**
- Is the spacing correct? (e.g. padding, margin) - 2 points
- Is there good interaction feedback? (e.g. hover, focus, active states--look at the design) - 3 points

**Code quality - 5 points**
- Are concerns clearly separated? (e.g. clear responsibilities for functions, etc.) - 3 point
- Is the code easy to read and understand? - 2 points


### Mission two: Insert a task into the database.

Complete this mission in:
- `./client/src/composables/useSubmitTask.ts` (see `./client/src/composables/useGetTasks.ts` for inspiration/example of how this approach works)
- `./api/src/index.ts`

Write and return a function here which will submit a JSON object to the server to be inserted into the database. Make sure that the response from the server is then placed into the tasks list.

**Definition of done:**
- [ ] the function sends a post request to the server
- [ ] the server inserts the task into the database
- [ ] the newly inserted task is placed into the tasks list

Your submission will be judged out of 10 points based on the following criteria:

**Works as expected - 5 points**
- Ship, ship, ship!

**Code quality - 5 points**
- Is the code clean and easy to read?
- Are there any obvious bugs?
- Are there any obvious performance issues?
- Are there comments where necessary?
