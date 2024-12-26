---
title: 'Clean Up Your Git History: How to Squash Commits Before Pushing to Production'
date: '2024-12-26'
time: '~5mins'
---

When you are working on a project, your Git commit history can sometimes get messy. You have probably made multiple small commits like "fix typo," "added a log statement," or "oops, removed the log statement." While these commits are useful during development, they can clutter the commit history when you merge your code into the production branch. That’s where **squashing commits** comes in.

This blog post will explore:

1. What squashing commits means.
2. Why it’s useful (especially for beginners).
3. How to squash commits step-by-step.
4. Tips to make the process painless.

Let’s dive in!

---

## What Does "Squash Commits" Mean?

Squashing commits means combining multiple smaller commits into one larger, meaningful commit. It’s like tidying up your desk before showing it to someone (you are organizing your work so it looks clean and professional).

For example, let’s say you have these three commits:

- `Added feature X`
- `Fixed typo in feature X`
- `Updated comments for feature X`

When you squash them, they become a single commit:

- `Added feature X with typo fix and updated comments`

This makes the Git history easier to read and understand, especially for others working on the same project.

---

## Why Squash Commits?

### 1. **Simplifies Commit History**
Imagine opening your project’s Git history and seeing dozens of commits for minor tweaks. It’s hard to tell what’s important and what’s just noise. Squashing helps you group related changes into a single, meaningful commit.

### 2. **Improves Collaboration**
If you are working on a team, a clean commit history makes it easier for others to review your work. Nobody wants to scroll through 10 commits to understand a single feature!

### 3. **Keeps Production Branch Clean**
The production branch (often called `main` or `master`) is like the final version of your project. Squashing ensures this branch only contains polished, well-documented commits.

---

## How to Squash Commits: Step-by-Step

Let’s say you have made three commits and want to squash them into one.

### Step 1: Open Your Terminal
First, navigate to your project folder:
```bash
cd path/to/your/project
```

### Step 2: Start an Interactive Rebase
Run this command to start a rebase for the last few commits:
```bash
git rebase -i HEAD~3
```
Replace `3` with the number of commits you want to squash.

### Step 3: Mark Commits to Squash
Git will open a text editor with a list of your recent commits, like this:
```
pick abc123 Added feature X
pick def456 Fixed typo in feature X
pick ghi789 Updated comments for feature X
```

- Change `pick` to `squash` (or just `s`) for the commits you want to combine:
```
pick abc123 Added feature X
squash def456 Fixed typo in feature X
squash ghi789 Updated comments for feature X
```

### Step 4: Edit the Commit Message
After saving, Git will ask you to edit the commit message. You will see something like this:
```
# This is a combination of 3 commits.
# The first commit’s message is:
Added feature X

# The following commit messages will also be included:
Fixed typo in feature X
Updated comments for feature X
```

- Combine these into a single, meaningful message:
```
Added feature X with typo fix and updated comments
```

Save and close the editor.

### Step 5: Force Push (If Necessary)
If you have already pushed the original commits to a remote branch, you will need to force-push the squashed commit:
```bash
git push --force
```

Be careful with force-pushing if you are working with others on the same branch—coordinate with your team first.

---

## Tips for a Smooth Squash

1. **Commit Often, Squash Later:** Don’t worry about squashing while you are working. Focus on committing often to save your progress. You can squash before merging.

2. **Use Descriptive Commit Messages:** When squashing, write a clear message that explains the combined changes.

3. **Coordinate with Your Team:** If others are working on the same branch, let them know before force-pushing.

4. **Use Git GUIs:** Tools like GitKraken, Sourcetree, or GitHub Desktop can make squashing commits easier if you are not comfortable with the command line.

---

## Final Thoughts

Squashing commits might sound intimidating at first, but it’s a simple way to keep your Git history clean and professional. It’s especially useful when you are merging your code into a shared or production branch. By following the steps above, you will be squashing like a pro in no time!

So next time someone says, "Squash your commits before pushing to production," you now know exactly what to do. Your team (and your future self) will thank you for the clean Git history.

Happy coding!
