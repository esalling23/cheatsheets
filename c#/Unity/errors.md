# Errors

Errors I've run into and took a minute to figure out. It's the small stuff. 

## FirstOrDefault 

**The Code:**

```c#
RankReward reward = res.level_rewards.FirstOrDefault((Reward r) => {
  return r.miner_level == i;
});
```

***The Error:**

```
'RankReward[]' does not contain a definition for 'FirstOrDefault' and the best extension method overload 'ParallelEnumerable.FirstOrDefault<Reward>(ParallelQuery<Reward>, Func<Reward, bool>)' requires a receiver of type 'ParallelQuery<Reward>'
```

**The Small Stuff:**

The damn parameter type is not a match for the return type! 

```diff
- RankReward reward = res.level_rewards.FirstOrDefault((Reward r) => {
+ RankReward reward = res.level_rewards.FirstOrDefault((RankReward r) => {
  return r.miner_level == i;
});
```