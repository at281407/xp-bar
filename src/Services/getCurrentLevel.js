export const getCurrentLevel = (currXp) => {
    console.log("Current Xp " + currXp);
    switch(true){
        case (currXp >= 0 && currXp < 300):
            return {
                level: 1,
                xpFloor: 0,
                nextLevel: 300,
                levelUpMessage: "Your journey is just beginning; you look foward the challanges ahead of you."
            }
        case (currXp >= 300 && currXp < 900):
            return {
                level: 2,
                xpFloor: 300,
                nextLevel: 900,
                levelUpMessage: "You realize that all your life you have been coasting along as if you were in a dream. Suddenly, facing the trials of the last few days, you have come alive."
            }
        case (currXp >= 900 && currXp < 2700):
            return {
                level: 3,
                xpFloor: 900,
                nextLevel: 2700,
                levelUpMessage: "You realize that you are catching on to the secret of success. It's just a matter of concentration."
            }
        case (currXp >= 2700 && currXp < 6500):
            return {
                level: 4,
                xpFloor: 2700,
                nextLevel: 6500,
                levelUpMessage: "You've done things the hard way. But without taking risks, taking responsibility for failure... how could you have understood?"
            }
        case (currXp >= 6500 && currXp < 14000):
            return {
                level: 5,
                xpFloor: 6500,
                nextLevel: 14000,
                levelUpMessage: "Everything you do is just a bit easier, more instinctive, more satisfying. It is as though you had suddenly developed keen senses and instincts."
            }
        case (currXp >= 14000 && currXp < 23000):
            return {
                level: 6,
                xpFloor: 14000,
                nextLevel: 23000,
                levelUpMessage: "You've learned a lot about Solis... and about yourself. It's hard to believe how ignorant you were, but now you have so much more to learn."
            }
        case (currXp >= 23000 && currXp < 34000):
            return {
                level: 7,
                xpFloor: 23000,
                nextLevel: 34000,
                levelUpMessage: "You resolve to continue pushing yourself. Perhaps there's more to you than you thought."
            }
        case (currXp >= 34000 && currXp < 48000):
            return {
                level: 8,
                xpFloor: 34000,
                nextLevel: 48000,
                levelUpMessage: "The secret does seem to be hard work, yes, but it's also a kind of blind passion, an inspiration."
            }
        case (currXp >= 48000 && currXp < 64000):
            return {
                level: 9,
                xpFloor: 48000,
                nextLevel: 64000,
                levelUpMessage: "So that's how it works. You plod along, putting one foot before the other, look up, and suddenly, there you are. Right where you wanted to be all along."
            }
        case (currXp >= 64000 && currXp < 85000):
            return {
                level: 10,
                xpFloor: 64000,
                nextLevel: 85000,
                levelUpMessage: "You woke today with a new sense of purpose. You're no longer afraid of failure. Failure is just an opportunity to learn something new."
            }
        case (currXp >= 85000 && currXp < 100000):
            return {
                level: 11,
                xpFloor: 85000,
                nextLevel: 100000,
                levelUpMessage: "Being smart doesn't hurt. And a little luck now and then is nice. But the key is patience and hard work."
            }
        case (currXp >= 100000 && currXp < 120000):
            return {
                level: 12,
                xpFloor: 100000,
                nextLevel: 120000,
                levelUpMessage: "You can't believe how easy it is. You just have to go... a little crazy. And then, suddenly, it all makes sense, and everything you do turns to gold."
            }
        case (currXp >= 120000 && currXp < 140000):
            return {
                level: 13,
                xpFloor: 120000,
                nextLevel: 140000,
                levelUpMessage: "It's the most amazing thing. Yesterday it was hard, and today it is easy. Just a good night's sleep, and yesterday's mysteries are today's masteries."
            }
        case (currXp >= 140000 && currXp < 165000):
            return {
                level: 14,
                xpFloor: 140000,
                nextLevel: 165000,
                levelUpMessage: "Today you wake up, full of energy and ideas, and you know, somehow, that overnight everything has changed. What a difference a day makes."
            }
        case (currXp >= 165000 && currXp < 195000):
            return {
                level: 15,
                xpFloor: 165000,
                nextLevel: 195000,
                levelUpMessage: "Now you just stay at your peak as long as you can. There's no one stronger in Tamriel, but there's always someone younger... a new challenger."
            }
        case (currXp >= 195000 && currXp < 225000):
            return {
                level: 16,
                xpFloor: 195000,
                nextLevel: 225000,
                levelUpMessage: "You've been trying too hard, thinking too much. Relax. Trust your instincts. Just be yourself. Do the little things, and the big things take care of themselves."
            }
        case (currXp >= 225000 && currXp < 265000):
            return {
                level: 17,
                xpFloor: 225000,
                nextLevel: 265000,
                levelUpMessage: "With the life you've been living, the punishment your body has taken... there are limits, and maybe you've reached them. Is this what it's like to grow old?"
            }
        case (currXp >= 265000 && currXp < 305000):
            return {
                level: 18,
                xpFloor: 265000,
                nextLevel: 305000,
                levelUpMessage: "You're really good. Maybe the best. And that's why it's so hard to get better. But you just keep trying, because that's the way you are."
            }
        case (currXp >= 305000 && currXp < 355000):
            return {
                level: 19,
                xpFloor: 305000,
                nextLevel: 355000,
                levelUpMessage: "By superhuman effort, you can avoid slipping backwards for a while. But one day, you'll lose a step, or drop a beat, or miss a detail... and you'll be gone forever."
            }
        case (currXp >= 355000):
            return {
                level: 20,
                xpFloor: 355000,
                levelUpMessage: "The results of hard work and dedication always look like luck. But you know you've earned every ounce of your success."
            }
        default:
            return null
    }
}