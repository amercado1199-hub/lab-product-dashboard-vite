module.exports = {
testEnvironment: "jsdom",
setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.js"],
testPathIgnorePatterns: ["<rootDir>/src/__tests__/setup.js"],
transform: {
"^.+\\.[jt]sx?$": "babel-jest",
},
moduleNameMapper: {
"\\.(css|less|scss|sass)$": "identity-obj-proxy"
}
};
