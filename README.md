# Cheatsheets

- [Language Agnostic Snippets](snippets.md)
- Tools
    - [Git](ToolsMisc/git.md)
    - [VSCode](ToolsMisc/vscode.md)
- Front End General
    - [CSS](FrontEnd/css.md)
- Javascript
    - [Gsap](Javascript/gsap.md)
    - [JSON](Javascript/json.md)
    - Phaser
        - [Core](Javascript/Phaser/core.md)
        - [Links](Javascript/Phaser/links.md)
        - [Tiled](Javascript/Phaser/tiled.md)
    - ReactJS
        - [Core](Javascript/React/core.md)
        - [Gsap](Javascript/Phaser/gsap.md)
        - [Redux](Javascript/Phaser/redux.md)
        - [Assets](Javascript/Phaser/assets.md)
- Unity
    - [C#](Unity/c%23.md)
    - [Editor](Unity/editor.md)
    - [Links](Unity/links.md)
- Computer Science
    - [Big O](CompSci/bigO.md)
    - [Binary Search](CompSci/binarySearch.js)
    - [Fibonacci](CompSci/fibonacci.js)
    - Data Structures
        - [Linked List](CompSci/DataStructures/linked-list.js)
        - [Queue](CompSci/DataStructures/queue.js)
        - [Stack](CompSci/DataStructures/stack.js)
        - Trees
            - [Code](CompSci/DataStructures/trees/trees.js)
            - [Walkthrough](CompSci/DataStructures/trees/trees.md)    

# Practice

Mostly interview stuff.

- [JS Practice lvl 0](Javascript/Practice/day1JS.md)
- [Starter Interview Problems](InterviewProblems/basic-whiteboard.md)
- [Array Manipulation](InterviewProblems/ArrayManipulation/arrayManipulation.md)
- [Cheapest Connections](InterviewProblems/CheapestConnections/cheapestConnections.md)
- [First Non-Repeating](InterviewProblems/FirstNonRepeating/firstNonRepeating.md)
- [Spiral Matrix](InterviewProblems/SpiralMatrix/spiralMatrix.md)

# Don't Re-Write That

All the stuff we (you) have already done. Ready to go. Don't re-write that, we got it.

Update often!

- Unity
    - [ScreenUtils](Unity/prebuilt/ScreenUtils.cs): Singleton; tracks screen data such as height, width, center, etc.
    - [Timer](Unity/prebuilt/Timer.cs): Simple timer class, using `Time.deltaTime`
    - Event System
        - [EventManager](Unity/prebuilt/Events/EventManager.cs): Singleton; tracks all events and allows components to trigger/listen to events
        - [EventName](Unity/prebuilt/Events/EventName.cs): Enum; adjust for your uses
        - [EventData](Unity/prebuilt/Events/EventData.cs): Struct; data sent with each event
