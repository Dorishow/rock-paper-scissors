# inventory-management

## Custom Docs
### Less 

#### media

```
@phone
@tablet
@desktop
@large

@phone-strict
@tablet-strict
@desktop-strict
```

example
```less
.media-query-example{
    width: 100%;
    
    @media @tablet {
        width: 768px;
    }
    
    @media @desktop {
        width: 940px;
    }
}
```


#### theme

```
@color-gray1,
@color-gray2,
@color-gray3,
@color-gray4,
@color-gray5,

@color-primary,
@color-secondary, 
@color-success,
@color-error,
```
