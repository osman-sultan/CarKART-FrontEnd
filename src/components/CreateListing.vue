<template>
<!-- Button trigger modal -->
<div class="d-grid gap-2 col-3 mx-auto">
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
    Create Vehicle Listing
  </button>
</div>

  <!-- Modal -->
  <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="creatingListing" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="creatingListing">Create Vehicle Listing</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Car Model</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Toyota Corolla">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter value $$$">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Car Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>