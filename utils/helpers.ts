export function sortDescending(data: any[]) {
  return data.sort((a, b) => b.id - a.id);
}

export function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}