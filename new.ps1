Param([parameter(mandatory=$true)][String]$slug)
$time = Get-Date -UFormat "%Y%m%d-%H%M%S"
hugo new posts/$($slug)_$($time).md
$file_contents = Get-Content ./content/posts/$($slug)_$($time).md -Encoding utf8 | % { $_ -creplace "title: ""$($slug)_$($time)""", "title: ""$($slug)"""}
Write-Output $file_contents | Out-File ./content/posts/$($slug)_$($time).md -Encoding UTF8
New-Item ./static/images/$($slug)_$($time) -ItemType Directory
Start-Process -FilePath ./content/posts/$($slug)_$($time).md
start 'C:\Program Files\Google\Chrome\Application\chrome.exe' 'http://localhost:1313/'
hugo server
pause