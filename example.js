const app1 = angular.module('app1', [])

app1.controller('clicheCtrl', function($scope) {
    const clicheArray = ["We need to wrap our heads around this", "It's a win-win", "It's a paradigm shift", "Let's blue sky this", "Let's put a pin in this", "Let's circle back to that", "We think outside the box here", "Let's color outside of the lines on this one", "We don't have the bandwidth for that", "This is where the rubber meets the road", "We'll go back and sharpen our pencils", "Let's right-size it", "We need to manage the optics of this", "Let's drill down on this", "Let's square the circle", "We're eating our own dog food", "Open kimono", "At the end of the day", "Let's put lipstick on this pig", "That's not our core competency", "We're facing some headwinds there", "We need increased fidelity on that", "Don't leave money on the table", "Hope is not a strategy", "I don't think it will move the needle", "Let's take the 30,000 foot view", "We're all about value-add", "Drinking from a fire hose", "Focus on the blocking and tackling", "Covered from soup to nuts", "Close the loop", "Low-hanging fruit", "Address the elephant in the room", "We'll loop you in when we need to", "Let's peel back the onion", "Phoning it in", "We're rowing in the same direction"]

    $scope.generateCliche = (() => {
        $scope.cliche = clicheArray[Math.floor((Math.random() * clicheArray.length))]
    })

    $scope.addCliche = ((newCliche) => {
        if(!(newCliche === undefined || newCliche === "")) {
            clicheArray.push(newCliche)
            $scope.missingNewClicheError = ""
        } else {
            $scope.missingNewClicheError = "Please enter a cliche"
        }
    })

    
})