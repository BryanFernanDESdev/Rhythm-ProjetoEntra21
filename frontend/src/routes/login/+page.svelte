<script>
  let username = '';
  let password = '';
</script>

<div class="h-screen bg-gradient-to-r from-white to-green-600 flex justify-center items-center">
  <div class="bg-zinc-900 p-8 rounded-lg shadow-2xl w-72 text-center">
    <h2 class="text-white text-2xl mb-5">Login</h2>
    <input
      type="text"
      bind:value={username}
      placeholder="Username"
      class="w-full p-2 mb-3 rounded border-none outline-none"
    />
    <input
      type="password"
      bind:value={password}
      placeholder="Password"
      class="w-full p-2 mb-3 rounded border-none outline-none"
    />
    <div class="mt-4 flex justify-center space-x-4">
      <button class="bg-transparent border-none">
        <img src="/icon1.png" alt="Icon 1" class="w-8 h-8" />
      </button>
      <button class="bg-transparent border-none">
        <img src="/icon2.png" alt="Icon 2" class="w-8 h-8" />
      </button>
    </div>
  </div>
</div>
