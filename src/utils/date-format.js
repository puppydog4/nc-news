export function timeAgo(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const timeDifference = now - date;

  const minutes = Math.floor(timeDifference / 60000);
  const hours = Math.floor(timeDifference / 3600000);
  const days = Math.floor(timeDifference / 86400000);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let result;
  if (minutes < 60) {
    result = `Posted ${minutes} minutes ago`;
  } else if (hours < 24) {
    result = `Posted ${hours} hours ago`;
  } else if (days < 30) {
    result = `Posted ${days} days ago`;
  } else if (days < 365) {
    result = `Posted ${months} months ago`;
  } else {
    result = `Posted ${years} years ago`;
  }

  return result;
}
