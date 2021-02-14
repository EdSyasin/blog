@props(['id', 'width' => 200, 'height' => 100])

<div id="{{$id}}" class="imageUploader">
    <label class="imageUploader__input" style="width: {{$width}}px; height: {{$height}}px;">
        <span id="{{$id}}__icon" class="mdi mdi-image-area" ></span>
        <img id="{{$id}}__img" src="#" style="display: none">
        <input id="{{$id}}__input" type="file" style="display: none">
    </label>
</div>
