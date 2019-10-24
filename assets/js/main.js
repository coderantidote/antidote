 $(document).ready(function() {
     $('#thread_table').DataTable({
         "order": [
             [2, "desc"]
         ],
         columnDefs: [
             { width: 500, targets: 0 },
             { width: 100, targets: 1 },
             { width: 100, targets: 2 },
             { width: 100, targets: 3 }
         ],
         fixedColumns: true
     });
 });