/*
extern crate hyper;

mod utils;

use hyper::{Client, Uri};
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}


#[wasm_bindgen]
pub fn request_ip()-> String {
    let client = Client::new();

    let future = client.get(Uri::from_static("http://httpbin.org/ip"));
    future.and_then().collect().to_string()
}

// was attempting to use hyper to do  Http Requests but i have no idea what im doing yet. Also, I need to have some sort of homepage up and running first!

//type Result<T> = std::result::Result<T, Box<dyn std::error::Error + Send + Sync>>;

*//*#[tokio::main]
async fn main() -> Result<()> {
// http requests
  //  let client = Client::new();
    let uri = "http://httpbin.org/ip".parse()?;
    let resp = client.get(uri).await?;

Ok(())
}*//*

*/



