const topics = [
  {
    topic: "Array",
    questions: [
      { id: 1, name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/", done: false, bookmarked: false, notes: "" },
      { id: 2, name: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", done: false, bookmarked: false, notes: "" },
      { id: 3, name: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/", done: false, bookmarked: false, notes: "" },
      { id: 4, name: "Maximum Subarray", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-subarray/", done: false, bookmarked: false, notes: "" },
      { id: 5, name: "Move Zeroes", difficulty: "Easy", link: "https://leetcode.com/problems/move-zeroes/", done: false, bookmarked: false, notes: "" },
      { id: 6, name: "Contains Duplicate", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate/", done: false, bookmarked: false, notes: "" },
      { id: 7, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", done: false, bookmarked: false, notes: "" },
      { id: 8, name: "Intersection of Two Arrays II", difficulty: "Easy", link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/", done: false, bookmarked: false, notes: "" },
      { id: 9, name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/", done: false, bookmarked: false, notes: "" },
      { id: 10, name: "Rotate Array", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-array/", done: false, bookmarked: false, notes: "" },
      { id: 11, name: "Valid Sudoku", difficulty: "Medium", link: "https://leetcode.com/problems/valid-sudoku/", done: false, bookmarked: false, notes: "" },
      { id: 12, name: "Find All Numbers Disappeared in an Array", difficulty: "Easy", link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/", done: false, bookmarked: false, notes: "" },
      { id: 13, name: "Single Number", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/", done: false, bookmarked: false, notes: "" },
      { id: 14, name: "Missing Number", difficulty: "Easy", link: "https://leetcode.com/problems/missing-number/", done: false, bookmarked: false, notes: "" },
      { id: 15, name: "Majority Element", difficulty: "Easy", link: "https://leetcode.com/problems/majority-element/", done: false, bookmarked: false, notes: "" },
      { id: 16, name: "Find Peak Element", difficulty: "Medium", link: "https://leetcode.com/problems/find-peak-element/", done: false, bookmarked: false, notes: "" },
      { id: 17, name: "Search in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", done: false, bookmarked: false, notes: "" },
      { id: 18, name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/", done: false, bookmarked: false, notes: "" },
      { id: 19, name: "Merge Intervals", difficulty: "Medium", link: "https://leetcode.com/problems/merge-intervals/", done: false, bookmarked: false, notes: "" },
      { id: 20, name: "Jump Game", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game/", done: false, bookmarked: false, notes: "" }
    ]
  },
  {
    topic: "String",
    questions: [
      { id: 21, name: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram/", done: false, bookmarked: false, notes: "" },
      { id: 22, name: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", done: false, bookmarked: false, notes: "" },
      { id: 23, name: "Palindrome Number", difficulty: "Easy", link: "https://leetcode.com/problems/palindrome-number/", done: false, bookmarked: false, notes: "" },
      { id: 24, name: "Implement strStr()", difficulty: "Easy", link: "https://leetcode.com/problems/implement-strstr/", done: false, bookmarked: false, notes: "" },
      { id: 25, name: "Count and Say", difficulty: "Easy", link: "https://leetcode.com/problems/count-and-say/", done: false, bookmarked: false, notes: "" },
      { id: 26, name: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/", done: false, bookmarked: false, notes: "" },
      { id: 27, name: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/", done: false, bookmarked: false, notes: "" },
      { id: 28, name: "Roman to Integer", difficulty: "Easy", link: "https://leetcode.com/problems/roman-to-integer/", done: false, bookmarked: false, notes: "" },
      { id: 29, name: "Integer to Roman", difficulty: "Medium", link: "https://leetcode.com/problems/integer-to-roman/", done: false, bookmarked: false, notes: "" },
      { id: 30, name: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/", done: false, bookmarked: false, notes: "" },
      { id: 31, name: "Count Primes", difficulty: "Medium", link: "https://leetcode.com/problems/count-primes/", done: false, bookmarked: false, notes: "" },
      { id: 32, name: "Implement Trie (Prefix Tree)", difficulty: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", done: false, bookmarked: false, notes: "" },
      { id: 33, name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/", done: false, bookmarked: false, notes: "" },
      { id: 34, name: "Simplify Path", difficulty: "Medium", link: "https://leetcode.com/problems/simplify-path/", done: false, bookmarked: false, notes: "" },
      { id: 35, name: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/", done: false, bookmarked: false, notes: "" },
      { id: 36, name: "Wildcard Matching", difficulty: "Hard", link: "https://leetcode.com/problems/wildcard-matching/", done: false, bookmarked: false, notes: "" },
      { id: 37, name: "Substring with Concatenation of All Words", difficulty: "Hard", link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", done: false, bookmarked: false, notes: "" },
      { id: 38, name: "Decode Ways", difficulty: "Medium", link: "https://leetcode.com/problems/decode-ways/", done: false, bookmarked: false, notes: "" },
      { id: 39, name: "String to Integer (atoi)", difficulty: "Medium", link: "https://leetcode.com/problems/string-to-integer-atoi/", done: false, bookmarked: false, notes: "" },
      { id: 40, name: "Longest Common Prefix", difficulty: "Easy", link: "https://leetcode.com/problems/longest-common-prefix/", done: false, bookmarked: false, notes: "" }
    ]
  },
  {
    topic: "Linked List",
    questions: [
      { id: 41, name: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/", done: false, bookmarked: false, notes: "" },
      { id: 42, name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/", done: false, bookmarked: false, notes: "" },
      { id: 43, name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/", done: false, bookmarked: false, notes: "" },
      { id: 44, name: "Remove Nth Node From End of List", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", done: false, bookmarked: false, notes: "" },
      { id: 45, name: "Palindrome Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/palindrome-linked-list/", done: false, bookmarked: false, notes: "" },
      { id: 46, name: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/", done: false, bookmarked: false, notes: "" },
      { id: 47, name: "Intersection of Two Linked Lists", difficulty: "Easy", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", done: false, bookmarked: false, notes: "" },
      { id: 48, name: "Sort List", difficulty: "Medium", link: "https://leetcode.com/problems/sort-list/", done: false, bookmarked: false, notes: "" },
      { id: 49, name: "Copy List with Random Pointer", difficulty: "Medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", done: false, bookmarked: false, notes: "" },
      { id: 50, name: "Remove Linked List Elements", difficulty: "Easy", link: "https://leetcode.com/problems/remove-linked-list-elements/", done: false, bookmarked: false, notes: "" },
      { id: 51, name: "Rotate List", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-list/", done: false, bookmarked: false, notes: "" },
      { id: 52, name: "Swap Nodes in Pairs", difficulty: "Medium", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", done: false, bookmarked: false, notes: "" },
      { id: 53, name: "Reorder List", difficulty: "Medium", link: "https://leetcode.com/problems/reorder-list/", done: false, bookmarked: false, notes: "" },
      { id: 54, name: "Linked List Cycle II", difficulty: "Medium", link: "https://leetcode.com/problems/linked-list-cycle-ii/", done: false, bookmarked: false, notes: "" },
      { id: 55, name: "Remove Duplicates from Sorted List", difficulty: "Easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", done: false, bookmarked: false, notes: "" },
      { id: 56, name: "Remove Duplicates from Sorted List II", difficulty: "Medium", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/", done: false, bookmarked: false, notes: "" },
      { id: 57, name: "Odd Even Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/odd-even-linked-list/", done: false, bookmarked: false, notes: "" },
      { id: 58, name: "Reverse Nodes in k-Group", difficulty: "Hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", done: false, bookmarked: false, notes: "" },
      { id: 59, name: "Flatten a Multilevel Doubly Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", done: false, bookmarked: false, notes: "" },
      { id: 60, name: "LRU Cache", difficulty: "Medium", link: "https://leetcode.com/problems/lru-cache/", done: false, bookmarked: false, notes: "" }
    ]
  },
  {
    topic: "Tree",
    questions: [
      { id: 61, name: "Binary Tree Inorder Traversal", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", done: false, bookmarked: false, notes: "" },
      { id: 62, name: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", done: false, bookmarked: false, notes: "" },
      { id: 63, name: "Validate Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/", done: false, bookmarked: false, notes: "" },
      { id: 64, name: "Symmetric Tree", difficulty: "Easy", link: "https://leetcode.com/problems/symmetric-tree/", done: false, bookmarked: false, notes: "" },
      { id: 65, name: "Binary Tree Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", done: false, bookmarked: false, notes: "" },
      { id: 66, name: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", done: false, bookmarked: false, notes: "" },
      { id: 67, name: "Path Sum", difficulty: "Easy", link: "https://leetcode.com/problems/path-sum/", done: false, bookmarked: false, notes: "" },
      { id: 68, name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", done: false, bookmarked: false, notes: "" },
      { id: 69, name: "Flatten Binary Tree to Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", done: false, bookmarked: false, notes: "" },
      { id: 70, name: "Populating Next Right Pointers in Each Node", difficulty: "Medium", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", done: false, bookmarked: false, notes: "" },
      { id: 71, name: "Sum of Left Leaves", difficulty: "Easy", link: "https://leetcode.com/problems/sum-of-left-leaves/", done: false, bookmarked: false, notes: "" },
      { id: 72, name: "Diameter of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/diameter-of-binary-tree/", done: false, bookmarked: false, notes: "" },
      { id: 73, name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", done: false, bookmarked: false, notes: "" },
      { id: 74, name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", done: false, bookmarked: false, notes: "" },
      { id: 75, name: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", done: false, bookmarked: false, notes: "" },
      { id: 76, name: "Construct Binary Tree from Inorder and Postorder Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", done: false, bookmarked: false, notes: "" },
      { id: 77, name: "Binary Tree Paths", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-paths/", done: false, bookmarked: false, notes: "" },
      { id: 78, name: "Binary Tree Right Side View", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/", done: false, bookmarked: false, notes: "" },
      { id: 79, name: "Count Complete Tree Nodes", difficulty: "Medium", link: "https://leetcode.com/problems/count-complete-tree-nodes/", done: false, bookmarked: false, notes: "" },
      { id: 80, name: "House Robber III", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber-iii/", done: false, bookmarked: false, notes: "" }
    ]
  },
  {
    topic: "Graph",
    questions: [
      { id: 81, name: "Number of Provinces", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-provinces/", done: false, bookmarked: false, notes: "" },
      { id: 82, name: "Clone Graph", difficulty: "Medium", link: "https://leetcode.com/problems/clone-graph/", done: false, bookmarked: false, notes: "" },
      { id: 83, name: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/", done: false, bookmarked: false, notes: "" },
      { id: 84, name: "Graph Valid Tree", difficulty: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/", done: false, bookmarked: false, notes: "" },
      { id: 85, name: "Number of Islands", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/", done: false, bookmarked: false, notes: "" },
      { id: 86, name: "Pacific Atlantic Water Flow", difficulty: "Medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", done: false, bookmarked: false, notes: "" },
      { id: 87, name: "Course Schedule II", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/", done: false, bookmarked: false, notes: "" },
      { id: 88, name: "Alien Dictionary", difficulty: "Hard", link: "https://leetcode.com/problems/alien-dictionary/", done: false, bookmarked: false, notes: "" },
      { id: 89, name: "Longest Increasing Path in a Matrix", difficulty: "Hard", link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", done: false, bookmarked: false, notes: "" },
      { id: 90, name: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", done: false, bookmarked: false, notes: "" },
      { id: 91, name: "Redundant Connection", difficulty: "Medium", link: "https://leetcode.com/problems/redundant-connection/", done: false, bookmarked: false, notes: "" },
      { id: 92, name: "Find the Town Judge", difficulty: "Easy", link: "https://leetcode.com/problems/find-the-town-judge/", done: false, bookmarked: false, notes: "" },
      { id: 93, name: "Cheapest Flights Within K Stops", difficulty: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", done: false, bookmarked: false, notes: "" },
      { id: 94, name: "Minimum Height Trees", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-height-trees/", done: false, bookmarked: false, notes: "" },
      { id: 95, name: "Reconstruct Itinerary", difficulty: "Medium", link: "https://leetcode.com/problems/reconstruct-itinerary/", done: false, bookmarked: false, notes: "" },
      { id: 96, name: "Network Delay Time", difficulty: "Medium", link: "https://leetcode.com/problems/network-delay-time/", done: false, bookmarked: false, notes: "" },
      { id: 97, name: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/", done: false, bookmarked: false, notes: "" },
      { id: 98, name: "Evaluate Division", difficulty: "Medium", link: "https://leetcode.com/problems/evaluate-division/", done: false, bookmarked: false, notes: "" },
      { id: 99, name: "Is Graph Bipartite?", difficulty: "Medium", link: "https://leetcode.com/problems/is-graph-bipartite/", done: false, bookmarked: false, notes: "" },
      { id: 100, name: "Shortest Path in Binary Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", done: false, bookmarked: false, notes: "" }
    ]
  }
];

export default topics;