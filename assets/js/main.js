function createTable() {
    $(document).ready(function() {
        $.get("json/posts.json", function(data) {
            $('#thread_table').dataTable({
                data: data,
                columns: [
                    { data: 'title' },
                    { data: 'categories' },
                    { data: 'date' },
                    { data: 'loc' }
                ],
                "order": [
                    [2, "desc"]
                ],
                columnDefs: [
                    { width: 500, targets: 0 },
                    { width: 100, targets: 1 },
                    { width: 100, targets: 2 },
                    { width: 100, targets: 3 }
                ],
                fixedColumns: true,
                Responsive: true
            });
        });
    });
}


createTable();