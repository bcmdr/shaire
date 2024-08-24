// src/usernameGenerator.js
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import seedrandom from "seedrandom";

export function generateUsername(uid) {
  // Seed the random number generator with the UID
  const rng = seedrandom(uid);

  // Custom configuration for unique-names-generator
  const customConfig = {
    dictionaries: [adjectives, colors, animals],
    separator: "-",
    style: "lowerCase",
    seed: rng(), // Pass the seeded random function
  };

  // Generate a random username based on the seed
  return uniqueNamesGenerator(customConfig);
}
