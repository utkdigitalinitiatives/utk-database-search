interface ResultPageInfo {
    endpoint: string;
    queryField: string;
    resultFields: string[];
    navigateBackTo: string;
}

const symphonyResultInfo: ResultPageInfo = {
    endpoint: `/knoxville_symphony_dev/select?`,
    queryField: 'id',
    resultFields: ['title', 'composer_name', 'season', 'date'],
    navigateBackTo: '/symphony',
}


export { symphonyResultInfo };
