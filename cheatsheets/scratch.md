title: Scratch Cheatsheet

category: Programming
description: A quick reference guide for essential Scratch blocks, commands, and workflows for creating interactive animations and games.

---

## 🛠️ Blocks & Commands

### **Motion Blocks**

| Block                                  | Description                            |
| -------------------------------------- | -------------------------------------- |
| `move (10) steps`                    | Move the sprite forward by 10 steps    |
| `turn (15) degrees`                  | Rotate the sprite by 15 degrees        |
| `go to (x: 0, y: 0)`                 | Move the sprite to a specific position |
| `glide (1) secs to (x: 100, y: 100)` | Smoothly move the sprite to a position |

### **Looks Blocks**

| Block                              | Description                           |
| ---------------------------------- | ------------------------------------- |
| `say ("Hello!") for (2) seconds` | Display a speech bubble for 2 seconds |
| `switch costume to (costume2)`   | Change the sprite’s appearance       |
| `change size by (10)`            | Increase the sprite’s size           |
| `hide`                           | Make the sprite invisible             |

### **Sound Blocks**

| Block                      | Description          |
| -------------------------- | -------------------- |
| `play sound (pop)`       | Play a sound effect  |
| `change volume by (-10)` | Decrease the volume  |
| `set volume to (50)%`    | Set the volume level |

### **Events Blocks**

| Block                        | Description                                |
| ---------------------------- | ------------------------------------------ |
| `when green flag clicked`  | Start the program when the flag is clicked |
| `when (space) key pressed` | Trigger an action when a key is pressed    |
| `when this sprite clicked` | Run a script when the sprite is clicked    |

### **Control Blocks**

| Block                        | Description                       |
| ---------------------------- | --------------------------------- |
| `repeat (10)`              | Loop a block 10 times             |
| `forever`                  | Continuously repeat a block       |
| `if (touching edge?) then` | Run a block if a condition is met |
| `wait (1) seconds`         | Pause execution for 1 second      |

### **Operators & Variables**

| Block                       | Description                  |
| --------------------------- | ---------------------------- |
| `pick random (1) to (10)` | Generate a random number     |
| `set (score) to (0)`      | Initialize a variable        |
| `change (score) by (1)`   | Increase a variable’s value |

---

## 🔄 Workflows

### **Creating a Simple Animation**

1. Add a sprite and set its starting position using `go to (x: 0, y: 0)`.
2. Use `repeat (10)` to move the sprite forward.
3. Add a `say ("Hello!") for (2) seconds` block for interaction.

### **Building a Basic Game**

1. Use `when green flag clicked` to start the game.
2. Add `if (touching edge?) then` to detect collisions.
3. Use `change (score) by (1)` to track points.

### **Adding Sound Effects**

1. Use `play sound (pop)` when an action occurs.
2. Adjust volume using `set volume to (50)%`.
3. Loop background music using `forever`.

---

## 💡 Examples

```scratch
# Move a sprite forward
move (10) steps

# Change sprite appearance
switch costume to (costume2)

# Play a sound effect
play sound (pop)
```

---

## 📚 References

- **[All Blocks of Scratch](https://scratched.gse.harvard.edu/sites/default/files/a.all_blocks_of_scratch_0.pdf)**
- **[Scratch Wiki Cheatsheet](https://www.en.scratch-wiki.info/wiki/Scratch_Wiki:Cheatsheet)**

```
<!-- end list -->
```
