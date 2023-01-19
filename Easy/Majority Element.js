var majorityElement = function (nums) {
  const itemCounts = {};
  for (let item of nums) {
    itemCounts[item] = itemCounts[item] ? itemCounts[item] + 1 : 1;
  }
  for (const key in itemCounts) {
    if (itemCounts[key] > nums.length / 2) return key;
  }
};
