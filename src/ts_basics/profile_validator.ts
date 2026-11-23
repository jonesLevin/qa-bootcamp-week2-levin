
type UserProfile = {
    id: number,
    username: string,
    setting?: {
        notification: boolean
    }
};

let user1: UserProfile = {
    id: 1,
    username: 'JohnDoe',
    setting: {
        notification: true
    }
};

let user2: UserProfile = {
    id: 2,
    username: 'JaneDoe',
    setting: {
        notification: false
    }
};

let user3: UserProfile = {
    id: 3,
    username: 'SamSmith'
};

// function that returns notification value and false when setting or notifications is missing
function isNotified(user: UserProfile): boolean {
    return user.setting?.notification ?? false;
}

console.log(isNotified(user1));
console.log(isNotified(user2));
console.log(isNotified(user3)); 