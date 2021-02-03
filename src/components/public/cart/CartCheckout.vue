<template>
  <div class="mb-3">
      <h5 class="mb-3">The total amount of</h5>

      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
          Temporary amount
          <span>$25.98</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
          Shipping
          <span>Gratis</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
          <div>
            <strong>The total amount of</strong>
            <strong>
              <p class="mb-0">(including VAT)</p>
            </strong>
          </div>
          <span><strong>$53.98</strong></span>
        </li>
      </ul>

      <button type="button" class="btn btn-primary btn-block">go to checkout</button>

  </div>
</template>

<script>
export default {
  name: 'CartCheckout'
}
</script>
