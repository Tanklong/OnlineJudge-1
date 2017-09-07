﻿app.title = '评测记录';
app.links = [];

component.data = function () {
    return {
        page: 1,
        pageCount: 10,
        statuses: statuses,
        languages: languages,
        selectedStatus: null,
        selectedProblem: null,
        selectedSubmittor: null,
        selectedLanguage: null,
        selectedContest: null,
        selectedTime: null
    };
};

component.methods = {
    filterStatus: function (status) {
        $('[data-value="' + this.selectedStatus + '"]').removeClass('active');
        if (this.selectedStatus !== null && this.selectedStatus === status) {
            this.selectedStatus = null;
        } else {
            this.selectedStatus = status;
            $('[data-value="' + this.selectedStatus + '"]').addClass('active');
        }
        setTimeout(function () {
            $('.filter-outer').removeClass('active');
        }, 300);
    },
    filterLanguage: function (language) {
        $('[data-value="' + this.selectedLanguage + '"]').removeClass('active');
        if (this.selectedLanguage && this.selectedLanguage == language) {
            this.selectedLanguage = null;
        } else {
            this.selectedLanguage = language;
            $('[data-value="' + this.selectedLanguage + '"]').addClass('active');
        }
        setTimeout(function () {
            $('.filter-outer').removeClass('active');
        }, 300);
    },
    filterTime: function (start, end) {
        if (!start && !end) {
            this.selectedTime = null;
        } else {
            this.selectedTime = { start: start, end: end };
        }
    },
    toPage: function (p) {
        this.page = p;
    }
};