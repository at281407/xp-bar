export const getCurrentLevel = (currXp) => {
    console.log("Current Xp " + currXp);
    switch(true){
        case (currXp >= 0 && currXp < 300):
            return {
                level: 1,
                xpFloor: 0,
                nextLevel: 300
            }
        case (currXp >= 300 && currXp < 900):
            return {
                level: 2,
                xpFloor: 300,
                nextLevel: 900
            }
        case (currXp >= 900 && currXp < 2700):
            return {
                level: 3,
                xpFloor: 900,
                nextLevel: 2700
            }
        case (currXp >= 2700 && currXp < 6500):
            return {
                level: 4,
                xpFloor: 2700,
                nextLevel: 6500
            }
        case (currXp >= 6500 && currXp < 14000):
            return {
                level: 5,
                xpFloor: 6500,
                nextLevel: 14000
            }
        case (currXp >= 14000 && currXp < 23000):
            return {
                level: 6,
                xpFloor: 14000,
                nextLevel: 23000
            }
        case (currXp >= 23000 && currXp < 34000):
            return {
                level: 7,
                xpFloor: 23000,
                nextLevel: 34000
            }
        case (currXp >= 34000 && currXp < 48000):
            return {
                level: 8,
                xpFloor: 34000,
                nextLevel: 48000
            }
        case (currXp >= 48000 && currXp < 64000):
            return {
                level: 9,
                xpFloor: 48000,
                nextLevel: 64000
            }
        case (currXp >= 64000 && currXp < 85000):
            return {
                level: 10,
                xpFloor: 64000,
                nextLevel: 85000
            }
        case (currXp >= 85000 && currXp < 100000):
            return {
                level: 11,
                xpFloor: 85000,
                nextLevel: 100000
            }
        case (currXp >= 100000 && currXp < 120000):
            return {
                level: 12,
                xpFloor: 100000,
                nextLevel: 120000
            }
        case (currXp >= 120000 && currXp < 140000):
            return {
                level: 13,
                xpFloor: 120000,
                nextLevel: 140000
            }
        case (currXp >= 140000 && currXp < 165000):
            return {
                level: 14,
                xpFloor: 140000,
                nextLevel: 165000
            }
        case (currXp >= 165000 && currXp < 195000):
            return {
                level: 15,
                xpFloor: 165000,
                nextLevel: 195000
            }
        case (currXp >= 195000 && currXp < 225000):
            return {
                level: 16,
                xpFloor: 195000,
                nextLevel: 225000
            }
        case (currXp >= 225000 && currXp < 265000):
            return {
                level: 17,
                xpFloor: 225000,
                nextLevel: 265000
            }
        case (currXp >= 265000 && currXp < 305000):
            return {
                level: 18,
                xpFloor: 265000,
                nextLevel: 305000
            }
        case (currXp >= 305000 && currXp < 355000):
            return {
                level: 19,
                xpFloor: 305000,
                nextLevel: 355000
            }
        case (currXp >= 355000):
            return {
                level: 20,
                xpFloor: 355000,
            }
        default:
            return null
    }
}