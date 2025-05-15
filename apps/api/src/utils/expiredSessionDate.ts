export const expiredSessionDate = (days: number) => {
	const expiredDate = new Date()
	expiredDate.setDate(expiredDate.getDate() + days)
	return expiredDate
}