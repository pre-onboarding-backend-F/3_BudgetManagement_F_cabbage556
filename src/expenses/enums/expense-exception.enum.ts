export enum ExpenseException {
	INVALID_ID = '잘못된 id 형식입니다.',
	NOT_FOUND = '존재하지 않는 지출입니다.',
	CANNOT_UPDATE_OTHERS = '자신의 지출 기록만 수정할 수 있습니다.',
	INVALID_YEAR_MONTH = '유효하지 않은 년도 또는 월입니다.',
	CANNOT_DELETE_OTHERS = '자신의 지출 기록만 삭제할 수 있습니다.',
}