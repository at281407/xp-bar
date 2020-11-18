export const getCurrentLevel = (currXp, table) => {
    console.log("Current Xp " + currXp, table);
    const currLevel = table.filter(level => {
        return currXp >= level.xpFloor && currXp < level.nextLevel;
    });
    return currLevel[0];
}