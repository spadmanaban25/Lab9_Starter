window.addEventListener('load', () => {
    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    conLog = errorBtns[0];
    conLog.addEventListener('click', () => {
        console.log('Console Log Demo');
    });
    
    conErr = errorBtns[1];
    conErr.addEventListener('click', () => {
        console.error('Console Error Demo');
    });

    conCount = errorBtns[2];
    conCount.addEventListener('click', () => {
        console.count('Count Button');
    });

    conWarn = errorBtns[3];
    conWarn.addEventListener('click', () => {
        console.warn('Console Warn Demo');
    });

    conAssert = errorBtns[4];
    conAssert.addEventListener('click', () => {
        let num1 = 7;
        let num2 = 5;
        let reason = "7 is expected to be larger than 5";

        console.assert(num1 < num2, {num1, num2, reason});
    });

    conClear = errorBtns[5];
    conClear.addEventListener('click', () => {
        console.clear();
    });

    conDir = errorBtns[6];
    conDir.addEventListener('click', () => {
        console.dir(document.head);
    });

    conDirXML = errorBtns[7];
    conDirXML.addEventListener('click', () => {
        console.dir(document);
    });

    conGroupStart = errorBtns[8];
    conGroupStart.addEventListener('click', () => {
        console.group('console.group Demo');
    });

    conGroupEnd = errorBtns[9];
    conGroupEnd.addEventListener('click', () => {
        console.groupEnd('console.group Demo');
    });

    conTable = errorBtns[10];
    conTable.addEventListener('click', () => {
        let courseTable = [
          {
            Course: 'CSE 12',

            StudentCount: '300',
          },
          {
            Course: 'CSE 100',

            StudentCount: '400',
          },
          {
            Course: 'CSE 110',

            StudentCount: '500',
          },

        ];

        console.table(courseTable);
    });

    conStartTimer = errorBtns[11];
    conStartTimer.addEventListener('click', () => {
        console.time();
    });

    conEndTimer = errorBtns[12];
    conEndTimer.addEventListener('click', () => {
        console.timeEnd();
    });

    conTrace = errorBtns[13];
    conTrace.addEventListener('click', function HandleTrace() {
        let shallow = () => { deep(); };
        let deep = () => { deeper(); };
        let deeper = () => { deepest(); };
        let deepest = () => { console.trace(); };

        shallow();
    });

    conGlobalError = errorBtns[14];
    conGlobalError.addEventListener('click', function globalError() {
        console.log('Sadly an error happened my friend');
        console.log(boom);
    });


});
