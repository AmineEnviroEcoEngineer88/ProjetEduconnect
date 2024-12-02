$(document).ready(function() {
    // Call the function when the button with class 'calculateButton' is clicked
    $('#calculateButton').on('click', function() {
        calculatePermissions();
    });

    // funciton to convert from rwx to octal
    function convertToOctal(rwxPermissions) {
        const permissions = rwxPermissions.split('');
        let octal = '';
        let octalSegment = '';
    
        // Convert the rwx permissions to octal representation
        for (let i = 0; i < permissions.length; i += 3) {
            const segment = permissions.slice(i, i + 3).join('');
            const octalValue = parseInt(segment, 2).toString(8);
            
            // Ensure the octal value is properly formatted (e.g., leading zeroes)
            octalSegment = ('000' + octalValue).slice(-3);
            octal += octalSegment;
        }

        return octal;
    }

    function calculatePermissions() {
        const ownerPermissions = getPermissionsForUser('or', 'ow', 'ox');
        const groupPermissions = getPermissionsForUser('gr', 'gw', 'gx');
        const allPermissions = getPermissionsForUser('ar', 'aw', 'ax');

        console.log('Owner Permissions:', ownerPermissions);
        console.log('Group Permissions:', groupPermissions);
        console.log('All Permissions:', allPermissions);
    
        // set the calculated permissions to the RWX
        const rwxPermissions = `${ownerPermissions}${groupPermissions}${allPermissions}`;
        $('input[name="rwx"]').val(rwxPermissions);

        // Convert rwx permissions to octal and display them in the 'oct' input field
        const octalPermissions = convertToOctal(rwxPermissions);
        $('input[name="oct"]').val(octalPermissions);


    }

    function getPermissionsForUser(readId, writeId, executeId) {
        const read = $(`input[name='${readId}']`).prop('checked') ? 'r' : '-';
        const write = $(`input[name='${writeId}']`).prop('checked') ? 'w' : '-';
        const execute = $(`input[name='${executeId}']`).prop('checked') ? 'x' : '-';

        return `${read}${write}${execute}`;
    }
});
