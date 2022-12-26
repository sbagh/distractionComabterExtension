# distractionComabterExtension
 Chrome extension to detect you endlessly scrolling different websites and snap you out of it (stop the dopamine algos!)

It will consist of multiple subsystems:

1- Get the hostname of the current tab you are on

2- Compare the current hostname to a chrome local storage, the local storage will contain an array of objects with hostname:minutes as key:value, where minutes represent the countdown minutes used in step 3 counter

3- if the current hostname user is on matches a hostname from the localstorage array, then get corresponding minutes value and start a countdown

4- when countdown hits 0, send a pop-up to the users screen telling them to get back to work (or just close the tab)