const activities = [
  { title: "Chess Club", category: "Games", location: "Studio 2", isFull: false },
  { title: "Coding Workshop", category: "Technology", location: "Lab 4", isFull: true },
  { title: "Cycling Group", category: "Sport", location: "Sports Hall", isFull: false }
];

function searchActivities(items, query) {
  const normalisedQuery = query.toLowerCase();
  return items.filter((activity) => {
    // TODO: return true when the title matches.
    return activity.title.toLowerCase().includes(normalisedQuery);
  });
}
function getStatus(activity) {
  if (activity.isFull) return { text: "Full", className: "status-full" };
  return { text: "Available", className: "status-available" };
}
function buildActivitySummaries(items) {
  return items.map((activity) => {
    const status = getStatus(activity);
    return {
      // TODO: add title, details, statusText and statusClass.
      title: activity.title,
      details: `${activity.category} · ${activity.location}`,
      statusText: status.text,
      statusClass: status.className
    };
  });
}
console.log("CHESS:", searchActivities(activities, "CHESS"));
console.log("work:", searchActivities(activities, "work"));
console.log("zzz:", searchActivities(activities, "zzz"));
console.log("empty query:", searchActivities(activities, ""));
console.log("empty items:", searchActivities([], "chess"));
console.log("summaries:", buildActivitySummaries(activities));
console.log("original activities:", activities);
