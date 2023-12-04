store.js:

Anda mengimpor configureStore dari Redux Toolkit untuk membuat store Redux.
Anda mengimpor reducer productReducer dari file "productSlice".
Anda menggunakan configureStore untuk membuat store dengan reducer "product" yang akan mengelola state produk.


productSlice.js:

Anda mengimpor createSlice dari Redux Toolkit untuk membuat slice Redux yang akan mengelola state produk.
Anda mendefinisikan slice dengan nama "product" dan initialState berisi objek dengan properti "title" dan "price".
Anda mendefinisikan satu aksi update dalam reducers slice, yang memperbarui properti "title" dan "price" dalam state berdasarkan payload dari aksi.
Anda mengekspor kreator aksi update dan reducer default dari slice.
Dengan konfigurasi seperti ini, Anda memiliki store Redux yang memiliki satu slice bernama "product" untuk mengelola state produk. Anda dapat menggunakan useDispatch untuk memicu aksi update dari komponen React Anda, dan ini akan mengubah state produk di dalam store sesuai dengan data yang Anda kirimkan melalui payload.

Anda dapat memodifikasi, menambahkan slice, atau aksi lainnya sesuai dengan kebutuhan aplikasi Anda. Ini adalah dasar dari penggunaan Redux Toolkit untuk mengelola state dalam aplikasi React.